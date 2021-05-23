import { useState } from "react";
import styles from "./Vault.module.scss";
import Stats from "../Stats";
import Deposit from "../Deposit";
import Withdraw from "../Withdraw";
import { Vault } from "../../types";
import { useUser } from "../../context/UserContext";

const DCAVault: React.FC<{ vault: Vault }> = ({ vault }) => {
  const [showDeposit, setShowDeposit] = useState(false);
  const user = useUser();
  return (
    <div className={styles.vault}>
      <div className={styles.body}>
        <div
          className={styles.click}
          onClick={() => setShowDeposit(!showDeposit)}
        >
          <Stats dca vault={vault} arrowDown={!showDeposit} />
        </div>
        {showDeposit && user && (
          <div className={styles.actions}>
            <div>
              <Deposit vault={vault} />
            </div>
            <div>
              <Withdraw vault={vault} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DCAVault;
