export interface Booth {
  id: number;
  name: string;
  address: string;
  // Position as percentage of map image dimensions
  x: number;
  y: number;
}

export const booths: Booth[] = [
  { id: 1, name: "Govt. Primary School (East)", address: "Kamarajar Salai, Poongulam, Saram", x: 32, y: 82 },
  { id: 2, name: "Govt. Primary School (West)", address: "Kamarajar Salai, Poongulam, Saram", x: 28, y: 82 },
  { id: 3, name: "S.R.S. Govt. High School (West)", address: "First Main Road, Thendral Nagar, Saram", x: 24, y: 85 },
  { id: 4, name: "S.R.S. Govt. High School (East)", address: "First Main Road, Thendral Nagar, Saram", x: 28, y: 85 },
  { id: 5, name: "Pondicherry Kadhi & Village Industries Board (East)", address: "Saram", x: 36, y: 84 },
  { id: 6, name: "Government Primary School Sithankudisai", address: "5th Cross Street, Brindhavanam", x: 40, y: 80 },
  { id: 7, name: "St. Mary's Sacred Heart Hr.Sec. School", address: "3rd Cross Street, Brindhavanam", x: 44, y: 78 },
  { id: 8, name: "Selvanatan Reception Hall (North)", address: "Vallalar Salai, Venkata Nagar", x: 18, y: 78 },
  { id: 9, name: "O/o. Junior Engineer (O&M), Electricity Dept.", address: "First Cross Street, Venkata Nagar", x: 14, y: 80 },
  { id: 10, name: "Tamizh Sangam Building (Main)", address: "45 Feet Main Road, Venkata Nagar", x: 22, y: 76 },
  { id: 11, name: "Andhra Maha Saba (West)", address: "Chellan Nagar, Venkatanagar", x: 26, y: 74 },
  { id: 12, name: "Directorate of Accounts & Treasuries (West)", address: "First Cross Street, Rainbow Nagar", x: 38, y: 70 },
  { id: 13, name: "Directorate of Accounts & Treasuries (North)", address: "First Cross Street, Rainbow Nagar", x: 42, y: 68 },
  { id: 14, name: "Directorate of Accounts & Treasuries (East)", address: "First Cross Street, Rainbow Nagar", x: 46, y: 70 },
  { id: 15, name: "Rainbow Nagar Womens Welfare Association", address: "4th Cross Street, Rainbow Nagar", x: 50, y: 66 },
  { id: 16, name: "Anganwadi Center", address: "Chellan Nagar, Venkatanagar", x: 30, y: 72 },
  { id: 17, name: "Prince Hall", address: "Vallalar Salai", x: 22, y: 72 },
  { id: 18, name: "Home for Differently Abled Persons", address: "9th Cross, Venkateshwara Nagar North, Saram", x: 48, y: 76 },
  { id: 19, name: "Govt. Primary School (South West)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", x: 20, y: 66 },
  { id: 20, name: "Govt. Primary School (South East)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", x: 24, y: 66 },
  { id: 21, name: "Govt. Primary School (West Block - North)", address: "Kavikuil Nagar Main Road, Chinnaiyanpet, Saram", x: 22, y: 62 },
  { id: 22, name: "Sathya Special School (Middle West)", address: "10th Cross Street, Rainbow Nagar", x: 42, y: 60 },
  { id: 23, name: "Govt Girls Hostel, AD Welfare Dept.", address: "Krishna Nagar", x: 52, y: 50 },
  { id: 24, name: "Selvalakshmi Reception Hall (West)", address: "Main Road, Krishna Nagar, Lawspet", x: 48, y: 46 },
  { id: 25, name: "Selvalakshmi Reception Hall (East)", address: "Main Road, Krishna Nagar", x: 52, y: 46 },
  { id: 26, name: "Sabari Vidhyashram Hr. Sec. School", address: "ECR, Krishna Nagar", x: 56, y: 42 },
  { id: 27, name: "Sabari Vidhyashram Hr. Sec. School (East)", address: "ECR, Krishna Nagar", x: 60, y: 42 },
  { id: 28, name: "Sathya Special School (West)", address: "10th Cross Street, Rainbow Nagar", x: 38, y: 60 },
  { id: 29, name: "Sathya Special School (Middle)", address: "10th Cross Street, Rainbow Nagar", x: 46, y: 60 },
  { id: 30, name: "T.V. Nagar Sports Club", address: "Main Road, Krishna Nagar", x: 62, y: 50 },
  { id: 31, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (Main Block - North)", address: "Jegaraj Nagar, Lawspet", x: 34, y: 42 },
  { id: 32, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (South)", address: "Jegaraj Nagar, Lawspet", x: 34, y: 46 },
  { id: 33, name: "Sri Ramakrishna Vidhyalaya Hr. Sec. School (Annexe-West)", address: "Jegaraj Nagar, Lawspet", x: 30, y: 44 },
  { id: 34, name: "Community Hall", address: "Anaikarai Medu, Samypillai Thottam", x: 52, y: 28 },
  { id: 35, name: "Fathima Hr. Sec. School (Borromeo Hall)", address: "Main Road, Samypillai Thottam, Lawspet", x: 42, y: 26 },
  { id: 36, name: "Fathima Hr. Sec. School (Main Block-Middle North)", address: "Main Road, Samypillai Thottam, Lawspet", x: 42, y: 30 },
  { id: 37, name: "Kamaraj Mani Mandapam (North)", address: "ECR, Samypillai Thottam, Lawspet", x: 56, y: 24 },
  { id: 38, name: "Kamaraj Mani Mandapam (South)", address: "ECR, Samypillai Thottam, Lawspet", x: 56, y: 28 },
  { id: 39, name: "Fathima Hr. Sec. School (Main Block-Middle South)", address: "Main Road, Samypillai Thottam, Lawspet", x: 42, y: 34 },
];
