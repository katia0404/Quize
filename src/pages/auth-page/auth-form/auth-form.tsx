
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import AuthForm from './auth-form'; // Обновленное импорт-указание
import './auth-page.css';
interface ISignInForm {
    login: string;
    password: string;
}

const AuthForm: React.FC = () => {
    const { handleSubmit, control } = useForm<ISignInForm>();
    const { errors } = useFormState({ 
        control
    });

    const history = useHistory();

    const onSubmit: SubmitHandler<ISignInForm> = data => {
        // Логика авторизации
        // После успешной авторизации, перенаправляем пользователя на страницу после авторизации
        history.push('/dashboard');
    };

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Войдите
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div" className="auth-form__subtitle">
                Чтобы получить доступ
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="login"
                    render={({ field }) => (
                        <TextField
                            label="Логин"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            error={!!errors.login?.message}
                            helperText={errors?.login?.message}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                        <TextField
                            label="Пароль"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={true}
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={!!errors?.password?.message}
                            helperText={errors?.password?.message}
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                >
                    Войти
                </Button>
            </form>

            <div className="auth-form__footer">
                <Typography variant="subtitle1" component="span">
                    Нету аккаунта?{" "}
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: 'blue' }}>
                    Зарегистрируйтесь
                </Typography>
            </div>
        </div>
    );
};

export default AuthForm;
