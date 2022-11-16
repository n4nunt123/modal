const errorHandler = async (err, req, res, next) => {
  let errors = { code: 500, message: 'Internal Server Error' }
  try {
    switch (err.name) {
      case 'SequelizeValidationError':
        const sequelizeError = err.errors.map(el => el.message)
        errors.code = 400
        errors.message = sequelizeError
        throw errors
      case 'SequelizeUniqueConstraintError':
        errors.code = 400
        errors.message = 'Error Data Inputed Must Be Unique'
        throw errors
      case 'Error-404':
        errors.code = 404
        errors.message = 'Error Data Not Found'
        throw errors
    }
  } catch (err) {
    const { code, message } = errors
    res.status(code).json({ message })
  }
}

module.exports = errorHandler