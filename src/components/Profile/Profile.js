import { ProfileDiv, ProfileDescription, ProfileName, ProfileText, ProfileList, ProfileListItem } from "./Profile.styled";
export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <ProfileDiv>
  <ProfileDescription>
    <img
      src={avatar}
          alt={username}
          width="150px"
      className="avatar"
    />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
  </ProfileDescription>

  <ProfileList>
    <li>
      <ProfileListItem>Followers</ProfileListItem>
          <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <ProfileListItem>Views</ProfileListItem>
          <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <ProfileListItem>Likes</ProfileListItem>
          <span className="quantity">{stats.likes}</span>
    </li>
  </ProfileList>
</ProfileDiv>
  )
}