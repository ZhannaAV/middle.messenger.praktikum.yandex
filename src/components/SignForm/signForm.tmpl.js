import './SignForm.less';

export const signFormTempl = ({title, formName, submitBtnText, children,isDisabled,text,linkTo,textLink, isError}) => `
            <main class="form-block">
                <h2 class=\"form-block__title\">${title}</h2>
                <form class="form-block__form" name=${formName}>
                    <fieldset class="form-block__fields">
                        ${children}
                    </fieldset>
                    <p class="form-block__error ${isError && "form-block__error-visible"}" >Что-то пошло не так...</p>
                    <button type="submit" class="form-block__button" ${isDisabled && "disabled"}>${submitBtnText}</button>
                </form>
                <p class="form-block__text">
                    ${text}
                    <a class="form-block__link" href=${linkTo}>${textLink}</a>
                </p>
            </main>
`
