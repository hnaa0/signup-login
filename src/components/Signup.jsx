import { useForm } from "react-hook-form";

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: true,
            pattern: {
              value: /^.{2,15}$/,
              message: "이름의 길이는 2글자 이상, 15글자 이하여야 합니다.",
            },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "8자리 이상 비밀번호를 입력하세요.",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <label htmlFor="passwordCheck">PasswordCheck</label>
        <input
          id="passwordCheck"
          type="password"
          {...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "비밀번호가 일치하지 않습니다.",
            },
            validate: {
              check: (value) => {
                if (getValues("password") !== value)
                  return errors.password.message;
              },
            },
          })}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
