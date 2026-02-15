import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white">📝</h1>
          <h2 className="text-4xl font-bold text-white">Todo App</h2>
          <p className="text-gray-400 text-lg">Organize your tasks simply</p>
        </div>
        
        <Button 
          onClick={() => navigate("/todo")}
          size="lg"
          className="px-8 py-6 text-lg"
        >
          Go !
        </Button>
      </div>
    </div>
  );
};

export default Home;
