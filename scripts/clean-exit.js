/**
 * Clean exit handler to guarantee clean process teardown across all platforms.
 * Hooks beforeExit to cleanly exit with the pending exit code.
 */
process.on('beforeExit', (code) => {
  process.exit(code !== undefined && code !== null ? code : (process.exitCode || 0));
});
