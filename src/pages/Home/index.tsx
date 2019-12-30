import React, { FC, useEffect, useState } from "react";
import api from "../../services/api";

import { columns } from "./main";

import { Table } from "antd";
import { Container } from "./styles.js";

interface Pet {
  id: number;
  name: string;
  sex_key: string;
  size_key: string;
  age_key: string;
  price: number;
}

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pets, setPets] = useState<[Pet]>();
  const [page, setPage] = useState<any>();

  const fetchPets = async (options?: Object, filters?: Object) => {
    setIsLoading(true);
    const {
      data: {
        data: { count, limit, page, result }
      }
    } = await api.post(
      "pet/search",
      {
        search: {
          _fields: [
            "id",
            "uuid",
            "custom_code",
            "name",
            "specie_id",
            "breed_primary_id",
            "price",
            "created_date",
            "status_key",
            "branch_id",
            "payment_model_key",
            "sex_key",
            "size_key",
            "age_key"
          ],
          specie: {
            with: {
              _fields: ["id", "name"]
            }
          },
          breed_primary: {
            with: {
              _fields: ["id", "name"]
            }
          },
          branch: {
            with: {
              uuid: "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
              _fields: ["id", "uuid"]
            }
          },
          ...filters
        },
        options: {
          page: 1,
          limit: 5,
          sort: [],
          ...options
        }
      },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );

    setPets(
      result.map(
        (pet: any) =>
          ({
            id: pet.id,
            name: pet.name,
            sex_key: pet.sex_key,
            size_key: pet.size_key,
            age_key: pet.age_key,
            price: pet.price
          } as Pet)
      )
    );

    setPage({
      total: count,
      pageSize: limit,
      current: page
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    const searchFilters: any = {};
    Object.keys(filters).map((key: string) => {
      searchFilters[key] = filters[key][0];
    });
    const pager = { ...page };
    pager.current = pagination.current;
    setPage(pager);

    fetchPets(
      {
        page: pagination.current,
        sort:
          Object.keys(sorter).length === 0
            ? []
            : [sorter.order === "descend" ? "-" + sorter.field : sorter.field]
      },
      searchFilters
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <Container>
      <nav>
        <h1>Adopets</h1>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <section>
        <Table
          columns={columns}
          rowKey={(record: Pet) => record.id.toString()}
          dataSource={pets}
          pagination={page}
          loading={isLoading}
          onChange={handleTableChange}
          data-testid={"table-pets"}
        />
      </section>
      <br />
    </Container>
  );
};

export default Home;
