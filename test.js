console.log("Tere maailm")

function tervitus1(nimi) {
    return "Tere " + nimi
}

console.log(tervitus1("Mati"))

const tervitus2 = (nimi) => {
    return "Tervitus2 " + nimi
}

console.log(tervitus2("Kati"))


const tervitus3 = nimi => "Kolmas tervitus, " + nimi

console.log(tervitus3("Maali"))

function naitatervitust(nimi, tervitusFunktsioon){
    console.log(tervitusFunktsioon(nimi))
}

naitatervitust("Kalle", tervitus1)
naitatervitust("Kalle", tervitus2)
naitatervitust("Kalle", tervitus3)
naitatervitust("Kalle", nimi => "Neljas tervitus " + nimi)



