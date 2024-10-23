module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
      indent: ['warn', 4, { SwitchCase: 1 }],
      'max-len': ['warn', { code: 150, ignoreComments: true, ignoreUrls: true }],
      eqeqeq: ['error', 'always'],
      quotes: ['warn', 'single'],
      'no-unused-vars': 'warn',
      'max-depth': ['error', 4],
      'max-lines': ['error', { max: 500, skipBlankLines: true, skipComments: true }],
      'no-inline-comments': 'error',
      'no-nested-ternary': 'warn',
      'no-undefined': 'warn',
      'no-var': 'warn',
      'no-console': 'warn',
      'default-case': 'warn',
      'max-params': ['warn', 7],
      'max-lines-per-function': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
  },
};
/*
indent:que indentacion se usa ( 2 espacios)
max-len:largo maximo de una linea, ignorando comentairos y urls
eqeqeq:que se use triple = para comparar valores
quotes: las comillas deben ser simples
no-unused-vars: si hay variables declaradas, pero no son usadas
max-depth: permiite hasta 3 anidaciones, 4 genera error
max-lines: maxima cantidad de lineas por archivo
no-inline-comments: para evitar comentario en la linea, que puede no verse
no-ternary: no usar ternario como warning
no-undefned: no usar el undefined
no-var: no usar var para definir variables
no-bitwise: no usar definision de variables & o > o |
no-console: que los console. algo sean marcados como warning
no-unrechable-loop: evita o marca si hay cdigo que no se ejecuta.
no-useless-assgnment: asignacion de variables que despues cambian.
camelcase: se setea para que las variables y funciones cumplan
default-case: para que en los switch siempre exista un default
max-params: definiir maximo de parametros en funciones
max-lines-per-function:maximas lineas por funcion
no-eq-null: no comparar con null
no-nested-ternary: para no naidar ternarios
*/
