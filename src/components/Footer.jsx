import {
  Facebook,
  FacebookOutlined,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";
const Container = styled.div`
  display: flex;
  color: white;
  background-color: transparent;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-content: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Azamat</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          omnis nulla sed magnam delectus natus, laborum enim laudantium
          repellendus reprehenderit?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Azamat</Title>
        <List>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
          <ListItem>Azamat</ListItem>
        </List>
      </Center>
      <Right>
        <Title>My cONTACT</Title>
        <ContactItem>
          <Room /> Azamat
        </ContactItem>
        <ContactItem>
          <Phone />
          +9996700748167
        </ContactItem>
        <ContactItem>
          <MailOutlined />
          aza-0710@bk.ru
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
