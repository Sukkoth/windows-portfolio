import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className='flex justify-between lg:flex-col p-5 space-y-1 explorer-menu'>
      <MenuItem
        to='projects'
        imageUrl='https://img.icons8.com/?size=100&id=dINnkNb1FBl4&format=png&color=000000'
        title='Projects'
      />
      <MenuItem
        to='documents'
        imageUrl='https://img.icons8.com/?size=100&id=Us0gLlbSYM9k&format=png&color=000000'
        title='Documents'
      />
      <MenuItem
        to='pictures'
        imageUrl='https://img.icons8.com/?size=100&id=K5ZTlMA55wO5&format=png&color=000000'
        title='Pictures'
      />
      <MenuItem
        to='links'
        imageUrl='https://img.icons8.com/?size=100&id=n9d0Hm43JCPK&format=png&color=000000'
        title='Links'
      />

      <MenuItem
        to='about'
        imageUrl='https://img.icons8.com/?size=100&id=VQOfeAx5KWTK&format=png&color=000000'
        title='About'
      />
    </div>
  );
}

type MenuItemProps = {
  imageUrl: string;
  title: string;
  to: string;
};
function MenuItem({ imageUrl, title, to }: MenuItemProps) {
  return (
    <NavLink
      to={to}
      replace
      className='flex gap-2 hover:bg-stone-700/50 p-2 rounded-lg items-center'
    >
      <img className='size-6' src={imageUrl} />{" "}
      <p className='hidden sm:block'>{title}</p>
    </NavLink>
  );
}

export default Menu;
