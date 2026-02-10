// Simulate fetching users
export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Ali Khan", email: "ali.khan@example.com", role: "User" },
        { id: 2, name: "Mazahir Sadpara", email: "mazahir.sadpara@example.com", role: "Admin" },
        { id: 3, name: "Ayesha Baloch", email: "ayesha.baloch@example.com", role: "User" },
        { id: 4, name: "Hamza Sheikh", email: "hamza.sheikh@example.com", role: "User" },
        { id: 5, name: "Fatima Noor", email: "fatima.noor@example.com", role: "Admin" },
        { id: 6, name: "Sarfraz Ahmed", email: "sarfraz.ahmed@example.com", role: "User" },
        { id: 7, name: "Zainab Tariq", email: "zainab.tariq@example.com", role: "User" },
        { id: 8, name: "Imran Raza", email: "imran.raza@example.com", role: "Admin" },
        { id: 9, name: "Bilal Qureshi", email: "bilal.qureshi@example.com", role: "User" },
        { id: 10, name: "Hina Shah", email: "hina.shah@example.com", role: "User" },
        { id: 11, name: "Omar Farooq", email: "omar.farooq@example.com", role: "Admin" },
        { id: 12, name: "Noor Fatima", email: "noor.fatima@example.com", role: "User" },
        { id: 13, name: "Shahbaz Ali", email: "shahbaz.ali@example.com", role: "User" },
        { id: 14, name: "Sana Iqbal", email: "sana.iqbal@example.com", role: "Admin" },
        { id: 15, name: "Tariq Javed", email: "tariq.javed@example.com", role: "User" },
      ]);
    }, 1000);
  });
};
