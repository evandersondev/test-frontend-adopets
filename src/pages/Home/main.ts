export const columns = [
  {
    title: "Id",
    dataIndex: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: true
  },
  {
    title: "Size",
    dataIndex: "size_key",
    filterMultiple: false,
    filters: [
      { text: "Small", value: "S" },
      { text: "Medio", value: "M" },
      { text: "Large", value: "L" },
      { text: "Extra Large", value: "XL" }
    ]
  },
  {
    title: "Age",
    dataIndex: "age_key",
    filterMultiple: false,
    filters: [
      { text: "Baby", value: "BABY" },
      { text: "Young", value: "YOUNG" },
      { text: "Adult", value: "ADULT" },
      { text: "Senior", value: "SENIOR" }
    ]
  },
  {
    title: "Sex",
    dataIndex: "sex_key",
    filterMultiple: false,
    filters: [
      { text: "Male", value: "MALE" },
      { text: "Female", value: "FEMALE" }
    ]
  },
  {
    title: "Price",
    dataIndex: "price"
  }
];
