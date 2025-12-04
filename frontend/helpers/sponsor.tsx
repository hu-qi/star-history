import utils from "../shared/common/utils"

interface Sponsor {
    // The name of the sponsor
    name: string
    // The logo of the sponsor and will be displayed in the right side section.
    logo: string
    // The landing image of the sponsor and will be displayed in the bottom side section.
    landingImage: string
    // The link of the sponsor.
    link: string
    // The slogan of the sponsor logo.
    logoSlogan: string
    // The slogan of the sponsor landing.
    landingSlogan: string
}

// The list of current sponsors.
const sponsors: Sponsor[] = [
    {
      name: "GitCode",
      logo: utils.absolutifyLink("/assets/sponsors/gitcode/logo.webp"),
      landingImage: utils.absolutifyLink("/assets/sponsors/gitcode/landing.webp"),
      link: "https://gitcode.com?utm_source=star-history",
      logoSlogan:
        "GitCode: Open-source platform for building LLM apps, from agents to AI workflows.",
      landingSlogan:
        "Open-source platform for building LLM apps, from agents to AI workflows.",
    },
    {
        name: "Huawei Developer Space",
        logo: utils.absolutifyLink("/assets/sponsors/space/logo.webp"),
        landingImage: utils.absolutifyLink("/assets/sponsors/space/landing.webp"),
        link: "https://devstation.connect.huaweicloud.com/devdesktop/h5?utm_source=techcircledspace&utm_adplace=hcdggzhq",
        logoSlogan: "Huawei Developer Space: One as All, All as One.",
        landingSlogan: "Unified technologies. Free resources. Complete AI development—from code to deployment."
    },
    {
        name: "OpenSource Bazaar",
        logo: utils.absolutifyLink("/assets/sponsors/bazaar/logo.webp"),
        landingImage: utils.absolutifyLink("/assets/sponsors/bazaar/landing.webp"),
        link: "https://bazaar.fcc-cd.dev/?utm_source=star-history",
        logoSlogan: "Open Source Bazaar: Where Ideas Flow Freely",
        landingSlogan: "Everyone Does a Little, Together We Change Much."
    }
]

export const randomSponsors = sponsors
