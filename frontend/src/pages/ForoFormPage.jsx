import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Label } from "../components/ui/Label";
import { useForo } from "../context/foroContext";
import { Textarea } from "../components/ui/Textarea";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function ForoFormPage() {
  const { createForo, getPost, updatePost } = useForo();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updatePost(params.id, {
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      } else {
        createForo({
          ...data,
          date: dayjs.utc(data.date).format(),
        });
      }

      navigate("/foro");
    } catch (error) {
      console.log(error);
      window.location.href = "/";
    }
  };

  useEffect(() => {
    const loadForo = async () => {
      if (params.id) {
        const foro = await getPost(params.id);
        setValue("title", foro.title);
        setValue("description", foro.description);
        setValue(
          "date",
          foro.date ? dayjs(foro.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue("completed", foro.completed);
      }
    };
    loadForo();
  }, []);

  

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />
        {errors.title && (
          <p className="">Please enter a title.</p>
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
        <Button>Save</Button>
      </form>
    </Card>
  );
}
