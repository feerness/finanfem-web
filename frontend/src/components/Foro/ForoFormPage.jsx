import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { useForo } from "../../context/foroContext";
import { Textarea } from "../ui/Textarea";
import { useForm } from "react-hook-form";
import './ForoForm.css';

dayjs.extend(utc);

export function ForoFormPage() {
  const { createForo } = useForo();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      date: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await createForo({
        ...data,
        date: dayjs.utc(data.date).format(),
      });
      navigate("/foro");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al guardar la publicación. Intenta de nuevo.");
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title", { required: "Please enter a title." })}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title.message}</p>
        )}

        <Label htmlFor="description">Description</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          {...register("description")}
        ></Textarea>

        <Label htmlFor="date">Date</Label>
        <Input type="date" name="date" {...register("date")} />
        <Button type="submit">Save</Button>
      </form>
    </Card>
  );
}
