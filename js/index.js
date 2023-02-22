async function main() {
  const module = await import('../pkg/index');
  module.hello_world();

  console.log(module.fib(30));
}


main();