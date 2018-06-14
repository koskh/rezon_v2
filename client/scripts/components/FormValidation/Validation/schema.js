// @flow
// export type Schema = {
//     [key: string]: {
//         type?: { // приведение получаемого значения к требуемому типу
//             convert: (value: string) => any,
//             msg: string
//         },
//         inputRules?: Array<{ // валидация ввода
//             validate: (value: any) => boolean,
//             msg: string
//         }>,
//         logicRules?: Array<{ // валидация логики (валидность относительно других полей)
//             validate: (attrs: any) => boolean,
//             msg: string
//         }>
//     }
// }

export type componentSchemaType = {
        convert?: { // приведение получаемого "значения виджета" к требуемому типу
            action: (value: any) => any,
            msg: string
        },
        hint?: { // Хинт для компонента формы
            msg: string
        },
        isValid?: { // Сообщение для валидного компонента формы
            msg: string
        },
        inputRules?: Array<{ // валидация ввода полей виджета
            validate: (value: any) => boolean,
            msg: string
        }>,
        logicRules?: Array<{ // валидация логики (валидность относительно других полей формы)
            validate: (attrs: any) => boolean,
            msg: string
        }>

}

export type formSchemaType = {
    [key: string]: {
        convert?: { // приведение получаемого "значения виджета" к требуемому типу
            action: (value: any) => any,
            msg: string
        },
        hint?: { // Хинт для компонента формы
          msg: string
        },
        isValid?: { // Сообщение для валидного компонента формы
            msg: string
        },
        inputRules?: Array<{ // валидация ввода полей виджета
            validate: (value: any) => boolean,
            msg: string
        }>,
        logicRules?: Array<{ // валидация логики (валидность относительно других полей формы)
            validate: (attrs: any) => boolean,
            msg: string
        }>
    }
}

export default {};
