import './Form.css';

function Form() {
    return (
        <form name="form" className="form" noValidate>
            <h1 className="form__title">Форма</h1>
            <div className="form__container">
                <div className="form__input-container">
                    <p className="form__input-name">Название</p>
                    <input
                    type="text"
                    name="name"
                    className="form__input"
                    placeholder="Название"
                    autoComplete="off"
                    />
                </div>
                <div className="form__input-container">
                    <p className="form__input-name">Дата</p>
                    <input
                    type="date"
                    name="date"
                    className="form__input"
                    placeholder="Дата"
                    autoComplete="off"
                    />
                </div>
                <div className="form__input-container">
                    <p className="form__input-name">Время</p>
                    <input
                    type="time"
                    name="time"
                    className="form__input"
                    placeholder="Время"
                    autoComplete="off"
                    />
                </div>
                <div className="form__input-container">
                    <p className="form__input-name">Количество</p>
                    <input
                    type="number"
                    name="number"
                    className="form__input"
                    placeholder="Количество"
                    autoComplete="off"
                    />
                </div>
                <div className="form__input-container">
                    <p className="form__input-name">Адрес</p>
                    <input
                    type="text"
                    name="address"
                    className="form__input"
                    placeholder="Адрес"
                    autoComplete="off"
                    />
                </div>
                <div className="form__file-upload-container">
                    <input type="file" id="input__file" className="form__file-upload-input" />
                    <label htmlFor="input__file" className="form__file-upload-button">Загрузить файл</label>
                </div>
            </div>
            <div className="form__checkbox-container">
                <input className="form__checkbox" type="checkbox"/>
                <p className="form__checkbox-title">Я согласен с политикой конфиденциальности</p>
            </div>
            <button type="submit" className="form__submit-button">Отправить</button>
        </form>
    );
}

export default Form;
