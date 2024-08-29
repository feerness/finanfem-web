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
import { useTranslation } from "react-i18next";
import './ForoForm.css';

dayjs.extend(utc);

export function ForoFormPage() {
  const { t } = useTranslation();
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
    },
  });

  const onSubmit = async (data) => {
    try {
      await createForo({
        ...data,
      });
      navigate("/foro");
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al guardar la publicación. Intenta de nuevo.");
    }
  };

  const handleBackClick = () => {
    navigate('/foro'); // Redirige sin guardar
  };

  return (
    <Card className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="title">{t("Título")} </Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          {...register("title", { required: "Por favor ingresa un título." })}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">{errors.title.message}</p>
        )}

        <Label htmlFor="description">{t("Descripción")}</Label>
        <Textarea
          name="description"
          id="description"
          rows="3"
          placeholder="Description"
          {...register("description", { required: "Por favor ingresa una descripción." })}
        ></Textarea>
        {errors.description && (
          <p className="text-red-500 text-xs italic">{errors.description.message}</p>
        )}

        <div className="form-actions">
          <Button type="button" className="back-btn" onClick={handleBackClick}>
            {t("Volver")}
          </Button>
          <Button type="submit" className="save-btn">
            {t("Save")}
          </Button>
        </div>
      </form>
    </Card>
  );
}
