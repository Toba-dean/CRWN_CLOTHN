import { useSelector } from "react-redux";

import MenuItem from "../menuitem";
import { DirContainer } from "./directory.styles";
import { selectSection } from "../../redux/slices/directorySlice";

const Directory = () => {

  const section = useSelector(selectSection)

  return (
    <DirContainer>
      {
        section.map(({ id, ...restProps }) => (
          <MenuItem key={id} {...restProps} />
        ))
      }
    </DirContainer>
  )
}

export default Directory
