import { useEffect } from "react";
import { useForo } from "../context/foroContext";
import { ForoCard } from "../components/PostCard";
import { ButtonLink } from "../components/ui/ButtonLink";


import { ImFileEmpty } from "react-icons/im";

export function ForoPage() {
  const { foro, getForo} = useForo();

  useEffect(() => {
    getForo();
  }, []);

  

  return (
    <>
      {foro.length === 0 && (
        <div className="">
          <div>
            <ImFileEmpty className="" />
            <h1 className="">
              No post yet, please add a new post
            </h1>
            <div className="">
              <ButtonLink to="/add-post">Añadir Post</ButtonLink>
            </div>
          </div>
        </div>
      )}

      <div className="">
        {foro.map((foroItem) => (
          <ForoCard 
          foro={{
            ...foroItem, 
            user: typeof foroItem.user === 'object' ? foroItem.user._id : foroItem.user
          }} 
          key={foroItem._id} 
        />
        

        ))}
      </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {foro.map((foroItem) => (
            <ForoCard
              foro={{ ...foroItem, user: foroItem.user._id }}
              key={foroItem._id}
            />
          ))}
        </div> */}
    </>
  );
}