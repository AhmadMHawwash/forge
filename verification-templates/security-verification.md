# SECURITY VERIFICATION

**Triggers:** security review, verify security, threat check  
**Use after:** Security-related changes or with `security-engineer` foundation

## INPUT VALIDATION

- [ ] All user input validated on the server (not just client-side)
- [ ] SQL queries parameterized (no string interpolation)
- [ ] File uploads validated (type, size, content)
- [ ] URL redirects validated against allowlist

## AUTHENTICATION & AUTHORIZATION

- [ ] Authentication required for all non-public endpoints
- [ ] Authorization checked at the resource level (not just role level)
- [ ] No IDOR vulnerabilities (user can only access their own data)
- [ ] Session/token expiration implemented and tested
- [ ] Password/credential handling follows current best practices

## DATA PROTECTION

- [ ] Sensitive data encrypted at rest
- [ ] Sensitive data encrypted in transit (TLS)
- [ ] No sensitive data in logs, error messages, or URLs
- [ ] No secrets hardcoded in source code
- [ ] PII handling compliant with applicable regulations

## DEPENDENCIES

- [ ] No known CVEs in dependency tree (`npm audit` / `pip audit` clean)
- [ ] Dependencies from trusted sources only
- [ ] Lock file committed and up to date

## ERROR HANDLING

- [ ] Errors fail closed (deny access on error, not permit)
- [ ] Error messages don't leak internal details to users
- [ ] Security events logged with sufficient context for investigation

## FINAL CHECK

- [ ] OWASP Top 10 reviewed against this change
- [ ] Rate limiting in place for authentication endpoints
- [ ] CORS configuration restrictive (not `*`)
