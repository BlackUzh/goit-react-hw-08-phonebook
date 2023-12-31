import { useSelector } from 'react-redux';

import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import phone from '../../images/phone.jpg';
import { Section } from 'components/Section/Section';
import { AuthNav } from 'components/AuthNavigation/AuthNavigation.styled';
import {
  AuthLinkHome,
  HomeContainer,
  HomeTextContainer,
  Img,
} from './HomeDescription.styled';

export const HomeDescription = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <HomeContainer>
      <Img src={phone} alt="phone" width="200" height="300" />
      <HomeTextContainer>
        <Section title={'Phonebook'}>
          {!isLoggedIn && (
            <>
              <AuthNav>
                <AuthLinkHome to="/register">Register</AuthLinkHome>
                <AuthLinkHome to="/login">Log In</AuthLinkHome>
              </AuthNav>
            </>
          )}
        </Section>
      </HomeTextContainer>
    </HomeContainer>
  );
};
