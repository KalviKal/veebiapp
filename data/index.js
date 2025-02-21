const matk1 = {
    nimetus: "Sügismatk Kõrvemaal",
    pildiUrl: "/assets/media/cat.png",
    kirjeldus: "Lähme ja oleme kolm päeva looduses",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee"]
 }
 
 
 const matk2 = {
    nimetus: "Süstamatk Hiiumaal",
    pildiUrl: "/assets/media/car.png",
    kirjeldus: "Lähme ja oleme kolm päeva vee peal",
    osalejad: ["mati@matkaja.ee", "kati@matkaja.ee", "uudo@ryhkija.ee"]
 }
 
 
 const matkad = [
    matk1,
    matk2,
    {
        nimetus: "Mägimatk Otepääl",
        pildiUrl: "/assets/media/cat.png",
        kirjeldus: "Lähme ja oleme kolm päeva mägedes",
        osalejad: ["uudo@ryhkija.ee"]
    }
 ]
 

 function loeMatkadeAndmed(){
    return matkad
 }


 function lisaOsaleja(matkaIndeks, osalejaEmail){
    const matk = matkad[matkaIndeks]
    if (!matk) {
        throw Error("Otsitavat matka ei ole!")
    }
    if (!osalejaEmail){
        throw Error("Osaleja E-mail puudub!")
    }

    if (matk.osalejad.findIndex( el => el === osalejaEmail) !== -1) {
        throw Error("Osaleja on juba regisreerunud")
    }

    matk.osalejad.push(osalejaEmail)
 }

 module.exports = {
    loeMatkadeAndmed,
    lisaOsaleja
 }