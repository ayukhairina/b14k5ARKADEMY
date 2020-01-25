const biodata = () => ({
    name: "Wahyu Khairina",
    age: 22,
    address:
        "Jl. Sapta Marga blok A.37 RT09/RW02 kota Banjarbaru Provinsi Kalimantan Selatan",
    hobbies: ["Watching Drama", "Crafting", "Reading"],
    is_married: false,
    list_school: [
        {
            name: "SMA Global Islamic BOarding School",
            year_in: 2012,
            year_out: 2015,
            major: "IPA"
        },
        {
            name: "IAI TAzkia",
            year_in: 2015,
            year_out: 2019,
            major: "Akuntansi Syariah"
        },
        {
            name: "CEP CCIT FTUI",
            year_in: 2017,
            year_out: 2019,
            major: "Teknologi Informasi Perbankan Syariah"
        }
    ],
    skills: [
        {
            name: "English",
            level: "Advanced"
        },
        {
            name: "Programming",
            level: "Beginner"
        }
    ],
    interest_in_coding: true
});

console.log(biodata());