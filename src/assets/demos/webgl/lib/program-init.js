export default function initProgram(
  gl,
  VERTEX_SHADER_SOURCE,
  FRAGMENT_SHADER_SOURCE
) {
  // 创建着色器
  const vertexShader = gl.createShader(gl.VERTEX_SHADER);
  const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

  // 指定源码
  gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE);
  gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE);

  // 编译
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // 创建程序对象
  const program = gl.createProgram();

  // 程序对象连接着色器
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // js跟程序对象关联
  gl.linkProgram(program);

  // 使用程序对象
  gl.useProgram(program);

  return program;
}
