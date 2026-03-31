import express from "express"

const app = express()
const port = Number(process.env.API_PORT ?? 4000)

app.use(express.json())

const isNonEmptyString = (value) =>
  typeof value === "string" && value.trim().length > 0

const isValidEmail = (value) => {
  if (!isNonEmptyString(value)) {
    return false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

app.post("/api/users", (req, res) => {
  try {
    const { name, email } = req.body ?? {}

    const errors = []

    if (!isNonEmptyString(name)) {
      errors.push({
        field: "name",
        message: "Name is required and must be a string",
      })
    }

    if (!isValidEmail(email)) {
      errors.push({
        field: "email",
        message: "Email is required and must be valid",
      })
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors,
      })
    }

    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      createdAt: new Date().toISOString(),
    }

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    })
  }
})

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  })
})

app.listen(port, () => {
  process.stdout.write(`API running on http://localhost:${port}\n`)
})
