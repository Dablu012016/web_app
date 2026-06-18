const { ZodError } = require("zod");

const validate = (schema) => async (req, res, next) => {
   try {
      const parsedData = await schema.parseAsync(req.body);
      req.body = parsedData;
      next();
   } catch (err) {

      if (err instanceof ZodError) {
         const error = {
            statusCode: 422,
            success: false,
            errors: err.issues.map((issue) => ({
               field: issue.path[0],
               message: issue.message,
            })),
         };

         return next(error);
      }

      next(err);
   }

}



module.exports = validate;



