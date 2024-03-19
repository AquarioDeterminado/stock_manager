import PageTemplate from "../../components/PageTemplate/PageTemplate";
import UntrackedItemInfo from "../../components/UntrackedItem/UntrackedItemInfo/UntrackedItemInfo";

function UntrackedInfo() {
  return (
    <PageTemplate canvas={<UntrackedItemInfo />} permissions={["all", "atributor", "abatuer", "user-manager"]} />
  );
}

export default UntrackedInfo;