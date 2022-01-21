import type { NextPage } from "next";
import Link from "next/link";
import styled, { css } from "styled-components";

function HomePage() {
  return (
    <S.EventDetail>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
          <a href="/clients">clients</a>
        </li>
      </ul>
    </S.EventDetail>
  );
}

//@styled
const S = {
  EventDetail: styled.main`
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.pointMint};
    position: relative;
    z-index: 0;
  `,
  GradientBar: styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 30rem;
    background: linear-gradient(blue, 30%, pink);
  `,
  Section: styled.section`
    width: 80%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 0;
    gap: 5rem;
  `,
  Title: styled.h1`
    font-size: 6rem;
    color: white;
    text-shadow: 0px 3px 10px black;
  `,
  Detail: styled.div`
    background-color: rgba(0, 0, 0);
    border-radius: 15px;
    width: 70%;
    min-width: 50rem;
    height: 50%;
    min-height: 50rem;
    color: white;
    display: flex;
    overflow: hidden;
  `,
  EventImg: styled.div`
    width: 50%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  EventInfo: styled.div`
    align-items: unset;
    padding: 1rem;
    gap: 3rem;
  `,
  P: styled.p`
    width: 80%;
    font-size: 3rem;
  `,
};

//!media
const Media = css`
  @media screen and (min-width: 50em) {
  }
`;

const EventDetailM = styled(S.EventDetail)`
  ${Media}
`;

export default HomePage;
