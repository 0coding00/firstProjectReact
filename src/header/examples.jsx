export default function Example({children ,isSelected, ...props}){
 return(
      <li>
        <button className={isSelected ? 'active' : undefined }  {...props} >{children}</button>
      </li>
    );
}