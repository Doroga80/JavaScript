datainfo = [
       
    {
    "id": "AC",
    "name": "AC",
    "cyrillic-name": "АС",
    "models": 4
    },
    {
    "id": "HUANGHAI",
    "name": "HuangHai",
    "cyrillic-name": "ХуангХай",
    "models": 4
    },
    {
    "id": "NASH",
    "name": "Nash",
    "cyrillic-name": "Нэш",
    "models": 1
    }
    
]

let data = JSON.parse(datainfo);
        console.log(data);
const contentBlok = document.querySelector('.content');

data.forEach((item) => { console.log(item.id)
});  
