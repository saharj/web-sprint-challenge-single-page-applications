import * as yup from "yup";

let formSchema = yup.object().shape({
  name: yup
    .string()
    .required("You need to provide a name")
    .min(2, "This is not a valid name."),
});

export default formSchema;
