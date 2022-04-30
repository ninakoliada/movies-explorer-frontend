import React, { useCallback } from "react";

export function useForm() {
    const [values, setValues] = React.useState({});

    const handleChange = (event) => {
        console.log(event.target);
        const target = event.target;
        let value = target.value;
        const name = target.name;

        if (target.type === 'checkbox') {
            value = event.target.checked;
        }

        setValues({ ...values, [name]: value });
    };

    return { values, handleChange, setValues };
}

export function useFormWithValidation(customValidation) {
    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        const defaultValidation = target.closest("form").checkValidity();
        const customCheck = customValidation && customValidation.find(item => item.name === name);

        if (customCheck && !customCheck.check(value)) {
            setErrors({ ...errors, [name]: 'Error' });
            setIsValid(false);
            return;
        }

        setIsValid(defaultValidation);
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, handleChange, errors, isValid, resetForm };
}