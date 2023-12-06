import { useSelector } from "react-redux";
import { RowPostAccounts } from "./RowPostAccounts"

const Row = (arr) => {
  let resultArr = [];
  for (let i = 0, isFirst = true; i < arr?.length;) {
    if (isFirst) { 
      const tempArr = [arr[i], arr[i+1]]?.filter((el) => el);
      if (tempArr?.length > 0) resultArr?.push(tempArr);
      i += 2;
      isFirst = false;
    } else {
      const tempArr = [arr[i], arr[i+1]]?.filter((el) => el);
      if (tempArr?.length > 0) resultArr?.push(tempArr);
      i += 2;
    }
  }
  return resultArr;
}

const NewAccounts = ({accounts}) => {

  return (
    <article className='block-w-newAccounts'>
      <p className='block-w-newAccounts__title'>Новыя акаўнты</p>
      {Row(accounts).map(el => 
        <RowPostAccounts 
          key={el}
          accounts={el}
        />
      )}
    </article>
  )
}

export { NewAccounts }