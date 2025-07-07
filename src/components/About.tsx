import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { Helmet } from "react-helmet";


const About = () => {

    const skills = [
        { name: "React Js", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895829/portfolio/dcb13a4d2e15006c4f6b712fa64142ea0f896ee2-500x500_rdy1g3.webp" },
        { name: "Next Js", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895828/portfolio/88cd77d2989c9fcff91d2c82cd434d16a9a70377-512x512_kva1al.webp" },
        { name: "Redux", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895828/portfolio/2bb780d2e8cb927ea10345181de06ab528a3523a-225x225_m1nzj1.webp" },
        { name: "Angular", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978027/portfolio/download_3_jnx9lh.svg" },
        { name: "Node Js", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895828/portfolio/87fb6731f596d77a74d901a24dcaeba9ca564be9-214x236_u7epsu.webp" },
        { name: "Javascript", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895828/portfolio/674d368475311b60be6403d4ac1a2b36e42ff8bb-1052x1052_rr1yqf.webp" },
        { name: "MongoDB", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978025/portfolio/download_qrcdfa.svg" },
        { name: "Express Js", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978025/portfolio/express-logo_gs4bzn.webp" },
        { name: "Sass", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978026/portfolio/download_5_endkgx.svg" },
        { name: "TypeScript", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895829/portfolio/2e0996423c88955d003db9368f214b4bc86ca691-400x400_ravzgx.svg" },
        { name: "Css", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978028/portfolio/download_2_hrnuus.svg" },
        { name: "Html", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978026/portfolio/download_7_yz0h9h.svg" },
        { name: "Material Ui", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895828/portfolio/5b6e5467f6d7136061937b59d6ec3639f775e61b-820x820_i87pdt.webp" },
        { name: "Vite", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744978025/portfolio/download_6_r7lwyf.svg" },
        { name: "Tailwind", url: "https://res.cloudinary.com/djcni3ioh/image/upload/v1744895829/portfolio/40e44bdd9f66de17cfd9dfc24acdacd818f703f2-287x175_zmqbqa.webp" },
    ];
    return (
        <Container maxW={["100vw", "100%"]} w={["100vw", ""]} bg={"#F7F9FC"}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
                <link rel="canonical" href="https://lakshmanportfolio2023.netlify.app/" />
            </Helmet>

            <Container h={""} maxW={"100%"} bgColor={"#F7F9FC"} bg='gray.50'>
                <Container maxW={"100%"} h={["", ""]} >
                    <Heading color={"#1F2937"} fontSize={["4xl","6xl"]} textAlign={"center"} mt={[3, ""]}>
                        Hey, I'm Lakshman Gupta
                    </Heading>
                    <Heading color={"#6B7280"} fontSize={["2xl","3xl"]} textAlign={"center"} mt={[3, ""]}>
                        FullStack Software Engineer from India
                    </Heading>
                    <Text whiteSpace={"break-spaces"} overflowWrap={"break-word"} fontWeight={"normal"} color={"gray.600"} fontSize={["sm", "lg"]} >
                        Hi, I’m a passionate Frontend and Full Stack Developer with hands-on experience building modern, responsive, and high-performance web applications.
                        I specialize in technologies like React, Redux, Next.js, Angular, and Nodejs . I also work with TypeScript, JavaScript, HTML, CSS, and popular UI
                        libraries like Material UI, Tailwind CSS, and Chakra UI.
                        I enjoy turning complex problems into clean, user-friendly solutions and building projects that are both functional and visually appealing.
                        With a solid understanding of MongoDB and backend development, I can take ideas from concept to full deployment.

                        I'm always excited to learn new tools and technologies, collaborate on meaningful projects, and create seamless digital experiences.
                    </Text>
                </Container>



                <Container h={["", "60vh"]} maxW={"100%"} bgColor={"#F7F9FC"}>
                    <Box h={"40%"} display={"flex"} alignItems={"center"} justifyContent={"center"} mt={[3, ""]}>
                        <Heading size={["2xl", "4xl"]}>
                            Tech Stack
                        </Heading>
                    </Box>

                    <Box margin={"auto"} h={"60%"} w={["100%","70%"]} display={"flex"} flexDirection={["row", "row"]} alignItems={"center"} justifyContent={"space-around"} mt={[3, ""]} mb={[3,""]} flexWrap={"wrap"}>

                        {
                            skills.map((item, idx) => (
                                <Box key={idx} borderRadius={"10%"} h={["75px","150px"]} w={["75px","150px"]} bgColor={"#FFFFFF"} mt={[3, ""]} boxSizing={"border-box"}
                                    border={"1px solid #E5E7EB"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
                                    <Image src={item.url} objectFit={"contain"} h={"80%"}  w={"80%"} />
                                    <Text fontSize={["sm","larger"]} h={"30%"} w={"100%"} fontWeight={"bold"} textAlign={"center"} color={"#1F2937"}>
                                        {item.name}
                                    </Text>
                                </Box>
                            ))
                        }

                    </Box>

                </Container>




                {/* <Container h={["", "70vh"]} maxW={"100%"} bgColor={"#bebfbd"} mt={[3, ""]}>
                    <Container color={"blackAlpha.800"} maxW={["100%", "70%"]} h={"100%"} >
                        <Box h={"8%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                            <Heading size={["2xl", "4xl"]}>
                                Services
                            </Heading>
                        </Box>

                        <Service />
                    </Container>
                </Container> */}


            </Container>

        </Container>
    )
}

export default About

export const HomeBanner = ({ heading, home, path }: any) => {
    return (
        <Container h={"40vh"} color={"white"} bg={"#0f0836"} maxW={["100vw", "100%"]}
            display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
            <Box >
                <Heading>
                    {heading}
                </Heading>
            </Box>

            <Box>
                <Text>
                    {home} / {path}
                </Text>
            </Box>
        </Container>
    )
}