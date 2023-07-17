import { LocalGithubUser } from "../../types";
import styles from "./UserStat.module.scss";

export interface UserStatProps
  extends Pick<LocalGithubUser, "repos" | "following" | "followers"> {}

export const UserStat = ({ repos, followers, following }: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Repos</div>
      <div className={styles.infoNuber}>{repos}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Followers</div>
      <div className={styles.infoNuber}>{followers}</div>
    </div>
    <div className={styles.info}>
      <div className={styles.infoTitle}>Following</div>
      <div className={styles.infoNuber}>{following}</div>
    </div>
  </div>
);
