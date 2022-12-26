import MenuItem from "../menuitem";
import { DirContainer } from "./directory.styles";
import { Sections } from "./section.data"

const Directory = () => {
  return (
    <DirContainer>
      {
        Sections.map(({ id, ...restProps }) => (
          <MenuItem key={id} {...restProps} />
        ))
      }
    </DirContainer>
  )
}

export default Directory
