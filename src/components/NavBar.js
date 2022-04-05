import React from "react"

import {
    Title,
    NavBarWrapper,
} from "../styles/NavBar.style"


const NavBarData = [
    {
        Title: "firma",
    },
    {
        Title: "oferty",
    },
    {
        Title: "dla inwestorów",
    },
    {
        Title: "dofinansowanie"
    },
    {
        Title: "kontakt"
    }
]

const aboutUsData = [
    {
        Title: "Kilka słów o naszej firmie",
        Content: "Cechujemy się wieloletnią tradycją w zakresie obróbki drewna. To co nas wyróżnia to wszystkie artykuły tworzone na wymiar. Wszystko co u nas wykonasz jest tworzone z niezwykłą dbałością o najmniejsze szczegóły. Z naszą pomocą uzyskasz produkty szyte na miarę. Od wielu lat skalujemy nasze przedsiębiorstwo. Przez co jesteśmy na tyle wydolni, aby obsługiwać kilka projektów w tym samym czasie. Ponadto nasze przedsiębiorstwo posiada siedziby w Warszawie, Gdańsku, Poznaniu oraz Wrocławiu co daje dużą przewagę logistyczną i lepszy zasięg. Nasze motto to bycie każdego dnia lepszą wersją siebie."
    },
    {
        Title: "Oferta naszej firmy",
        Content: 'Posiadamy kilka rozwiniętych fabryk w różnych lokalizacjach. Posiadamy specjalistyczne sprzęty, między innymi - nowoczesne skrawarki, piły tnące, komputerowe narzędzia pomiarowe, tokarki systemowe i wiele więcej. Maszyny to nie wszystko… Posiadamy również sztab specjalistów. Każdy pracownik posiada specjalistyczną wiedzę oraz kompetencje w celu wykonywania precyzyjnych usług. Ponadto posiadamy ważne certyfikaty PSA, GHT oraz VESE-100 dzięki którym możemy brać udział w międzynarodowych projektach wysokiej rangi.'
    },
    {
        Title: "Informacje dla inwestorów",
        Content: "Nasze przedsiębiorstwo posiada notowania giełdowe. Podmiot istnieje od 12 lat. Rozwój na przestrzeni lat jest stabilny z tendencją wzrostową. Specjalnie dla inwestorów przygotowaliśmy specjalne dokumenty i raporty dostępne poniżej w celu bliższego zapoznania się ze spółką."
    },
    {
        Title: "Informacje o dofinansowaniach",
        Content: "Dzięki ścisłej współpracy z funduszami europejskimi posiadamy na swoim koncie wiele dofinansowań a co za tym idzie lepszych możliwości na rozwój. Cała historia zrealizowanych dofinansowań jest dostępna poniżej."
    }
]


const Header = () =>{
    return(
        <NavBarWrapper>
            {NavBarData.map((item) => {
                return(
                    <Title>{item.Title}</Title>
                )
            })}
        </NavBarWrapper>
    )
}

export default Header