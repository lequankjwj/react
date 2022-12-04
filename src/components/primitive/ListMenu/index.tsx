import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from '@scss/components/ListMenu.scss';
import IconDown from '@svg/arrow-menu-down.svg';
import IconUp from '@svg/arrow-menu-up.svg';
import { useRouter } from 'next/router';

export default function ListMenu({ listSubMenu, closeModal }: any) {
  // const [open, setOpen] = useState(false);
  const route = useRouter();

  const handleClick = (url) => {
    // setOpen(!open);
    closeModal();
    route.push(`/${url}`);
  };

  return (
    <>
      <style jsx>{styles}</style>
      <div className="list_custom">
        <List
          className="box_list"
          sx={{ width: '100%', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {listSubMenu?.sub?.map((item) => (
            <div key={item?.name}>
              <ListItemButton onClick={() => handleClick(item.url)}>
                <ListItemText primary={item.name} />
                {open ? <IconUp /> : <IconDown />}
              </ListItemButton>
              <Collapse in={false} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton className="list_submenu">
                    <ListItemText primary="Business Process Reengineering (BPR)" />
                    <ListItemText primary="Service Operations" />
                    <ListItemText primary="Data-driven decision" />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </div>
    </>
  );
}
