import styled, { css } from 'styled-components';

import { Chat, Rocketseat, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;


export const Retweet = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;


export const RocketseatIcon = styled(Rocketseat)`
  width: 16px;
  height: 16px;

  margin: 0 9px 0 35px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-right: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }
  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  } 
`;

export const Dot = styled.div`
  width: 2px;
  height: 2px;
  background: var(--gray);
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  transition: .2s;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
`;

export const Icons = styled.div`
  width: 100%; /** Mobile */

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  transition: hover .2s;
  margin: 11px auto 0;

  @media (min-width: 330px) {
    width: 63%; /** Tablet */
  }

  > div {
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  
  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &, > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: var(--retweet);

    > svg path {
      fill: var(--retweet);
    }
  }
  &:nth-child(3) {
    color: var(--like);

    > svg {
      fill: var(--like);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`${iconCSS}`;

export const RetweetIcon = styled(Rocketseat)`${iconCSS}`;

export const LikeIcon = styled(Favorite)`${iconCSS}`;