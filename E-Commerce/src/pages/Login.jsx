
import { LoginSVG } from "../assets/SVG/LoginSVG";
import { Button } from "../components/Elements/Button/Button";
import { Input } from "../components/Elements/Input";

export const Login = () => {
  return (
    <div className='w-screen h-screen flex'>
      <aside className="flex-1">
        <LoginSVG />
      </aside>
      <aside className="flex-1 flex items-center justify-center">
        <form>
          <Input />
          <Input />
          <Button />
        </form>
      </aside>
    </div>
    );
}
