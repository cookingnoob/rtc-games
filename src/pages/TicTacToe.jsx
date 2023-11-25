import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

/*
 * Estas pueden parecer redundantes, pero (por lo menos sin typescript)
 * luego es un desmadre estar atando lógica a valores literales por ahí.
 *
 * Imagina que es una aplicación más compleja y hay muchos valores textuales
 * y luego quieres cambiar uno u agregar otro o algo así, y tienes if's por todos
 * lados con los valores textuales.
 *
 * Siempre es recomendable tener todas tus cadenitas de texto atadas a un nombre
 * de variable, para poder reusarlas mejor (vs code te las autocompleta) y poder
 * cambiarlas de golpe en todos lados si se necesita.
 */
export const SYMBOL_X = "X";
export const SYMBOL_O = "O";
export const TURN_PLAYER = "player";
export const TURN_COMPUTER = "computer";

/**
 * If given X, returns, O. Otherwise, returns X
 *
 * Esta notación de comentarios viene de jsdoc [https://jsdoc.app/]
 * Es util para agregar metadata y descripción más detallada de las funciones
 * y variables. De hecho VS Code te la muestra cuando haces hover en las
 * funciones cuando las usas.
 *
 * La notación de acá define el tipo del parámetro (lo entenderás mejor cuando
 * llegues a typescript). Ando viendo que vs code lo cacha y te autocompleta
 * los parámetros. Esta notación significa que solo acepta las cadenas "X" ú "O"
 * @param {"X" | "O"} symbol
 * @returns
 */
function getOppositeSymbol(symbol) {
  if (symbol === SYMBOL_X) return SYMBOL_O;
  return SYMBOL_X;
}

//necesito crear algo que inicie el juego aleatoriamente en mi turno o el de computadora
//revisar que computadora o jugador hicieron su movimiento para activar el siguiente

const TicTacToe = () => {
  /*
   * === State definition ==
   */

  /*
   * Esta es una manera mucho más simple de definir un array de 9 nulls
   */
  const [board, setBoard] = useState([...new Array(9)]);
  const [text, setText] = useState("Escoge una ficha");
  /*
   * Les puse a estas nombres más descriptivos para que no se me olviden
   * qué representan
   */
  const [currentTurn, setCurrentTurn] = useState(null);
  /*
   * Los dejé como refs porque creeeeo que sí sirven para lo que estás haciendo,
   * pero yo no usaría ref como mi primera opción. Si es un valor que va a cambiar
   * y se va a ver en la pantalla, siempre empieza con useState y, si ves que el
   * componente se está repintando más de lo que debe, ya empieza a pensar en usar
   * useRef.
   */
  const playerSymbol = useRef(null);
  const computerSymbol = useRef(null);
  /**
   * If the user can click on the board.
   *
   * The user should have chosen a symbol and be the player's turn
   */
  const canUserPlay = currentTurn === TURN_PLAYER && playerSymbol !== null;

  /*
   * === STATE LOGIC ===
   */

  /**
   * Sets the player's symbol to `symbol` and the computer's to the opposite symbol
   *
   * **This function will not trigger a rerender**
   *
   * Le quité la lógica de empezar el juego para mantener cada función
   * con 1 sola tarea (y evitar el código spaghetti).
   *
   * Llamaré a empezar el juego en el mero botón cuando el usuario eliga
   * una ficha
   * @param {"X" | "O"} symbol
   */
  const setPlayerSymbol = (symbol) => {
    playerSymbol.current = symbol;
    /*
     * Hice la función getOppositeSymbol, porque usas esa lógica un par de
     * veces más en el programa.
     *
     * La definí afuera de la función del componente, porque no utiliza estado
     * o parámetros del componente y así no se anda redefiniendo cada vez que
     * el componente se pinta
     */
    computerSymbol.current = getOppositeSymbol(symbol);
  };

  /**
   * Randomly picks what player will start and sets the turn to that
   *
   * Le quité que iniciara el turno de la computadora, dado que justo
   * lo vamos a manejar en un useEffect
   */
  const gameStart = () => {
    if (currentTurn == null) {
      let randomNumber = Math.floor(Math.random() * 2);
      /*
       * `Math.random()` regresa números en el rango [0,1), o sea que nunca
       * regresará 1 (Y aunque lo hiciera, sería muuuy poco probable).
       *
       * Al multiplicarlo por 2, el rango se vuelve [0,2), o sea que nunca será 2.
       *
       * Al hacerle `floor`, los únicos valores que puedes obtener son `0` o `1`,
       * haciendo que siempre empiece la computadora.
       *
       * Cambié la condición por `randomNumber < 1` para que el usuario
       * pueda empezar a veces. Igual no necesitas el floor.
       */
      if (randomNumber < 1) {
        setCurrentTurn(TURN_COMPUTER);
        setText("La computadora comienza la partida");
      } else {
        setCurrentTurn(TURN_PLAYER);
        setText("El jugador comienza la partida");
      }
    }
  };

  /**
   * Restarts the game, emptying the board, emptying the symbols and the turns
   */
  const resetGame = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    playerSymbol.current = null;
    computerSymbol.current = null;
    setText("Escoge una ficha");
    setCurrentTurn(null);
  };

  /**
   * Plays a symbol on a specific position of the board
   *
   * Le cambié el nombre a la función y a los argumentos para que sea más claro qué hace la
   * función y de qué es responsable.
   *
   * Le quité la logica de que pasara el turno, justo porque eso genera código spaghetti
   *
   * @param {number} index The position of the board to play
   * @param {"X" | "O"} symbol The symbol to play on the board
   * @returns
   */
  const playTurn = useCallback(
    (index, symbol) => {
      if (board[index] !== null) {
        return;
      } else if (playerSymbol.current == null) {
        setText("No has escogido una ficha");
        return;
      }
      const newBoard = [...board];
      newBoard[index] = symbol;
      setBoard(newBoard);
    },
    [board]
  );

  /**
   * Plays the computer's turn automatically and passes the turn to the player
   *
   * Randomly chooses a spot to play in
   * TODO: Implement better strategy >:)
   *
   * Acá tuve que crear la función a través de un `useCallback` porque estoy usando
   * la función en un `useEffect`
   *
   * Todo el código que escribas en el cuerpo de un componente funcional (en este caso es la
   * función TicTacToe) se va a ejecutar cada rerender. Esto también aplica a la definición
   * de funciones. Normalmente quieres esto, más cuando son funciones que usan el estado
   * o parámetros del componente: quieres que se redefinan con los nuevos valores.
   *
   * Sin embargo, esto ocasiona problemas cuando una función es dependencia de otro hook, como
   * useEffect. Aunque la función tenga los mismos valores que la "versión pasada", su id interno
   * en memoria cambia, haciendo que se ejecute el useEffect otra vez. Y como nuestro useEffect
   * puede ocasionar otro rerender, podría causar un ciclo infinito.
   *
   * useCallback lo que hace es restringir la redefinición de la función solo cuando alguna de
   * sus dependencias (el arreglo de abajo [board, playTurn]) cambia. Haciendo que no se ande
   * redefiniendo cuando no necesita, causando triggers de más del useEffect y rerenders de más
   */
  const computerTurn = useCallback(() => {
    const emptyCells = board
      .map((cell, index) => (cell == null ? index : null))
      .filter((index) => index !== null);
    let freeIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    playTurn(freeIndex, computerSymbol.current);
    passTurn(TURN_PLAYER);
  }, [board, playTurn]);

  /**
   * Passes the turn, updating `currentTurn`
   * @param {"computer" | "player"} turn Who to pass the turn to
   * @returns
   */
  const passTurn = (turn) => {
    if (turn === null) {
      return;
    } else if (turn === TURN_COMPUTER) {
      setCurrentTurn(TURN_COMPUTER);
      /*
       * Le quito acá el correr el turno de la computadora,
       * porque lo vamos a manejar en un useEffect
       */
      // computerTurn(board);
    } else if (turn === TURN_PLAYER) {
      setCurrentTurn(TURN_PLAYER);
    }
    setText(`Es el turno de ${turn}`);
  };

  /*
   * === Hooks and handlers ===
   */

  /*
   * We use an effect to play as the computer. Only if it's the computer's turn.
   * The effect **must** pass the turn to the player, if not it will cycle
   */
  useEffect(() => {
    if (currentTurn === TURN_COMPUTER) {
      /*
       * Acá uso un setTimeout para que la compu no juegue luego luego
       * y puedas ver los mensajes de `Es el turno de ${TURN_COMPUTER}`
       *
       * setTimeout(callback, ms) se va a esperar los ms que le digas y
       * después va a ejecutar la función callback
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
       */
      setTimeout(() => {
        computerTurn();
        passTurn(TURN_PLAYER);
      }, 1000);
    }
  }, [currentTurn, computerTurn]);

  /*
   * == Render Function ===
   */
  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/**
       * Eliminé el componente ResetTicTacToe porque era un poco redundante
       * y además su función usaba un montón de lógica definida acá, y era
       * una pasadera de props innecesaria.
       */}
      <button onClick={resetGame}>Inicia la partida</button>
      <br />
      {
        /**
         * Cambie el inline if (x ? y : z) por un &&
         *
         * Hace lo mismo y es un poco más claro que explicitamente dice:
         * "Si esta condicion no se cumple, no voy a renderizar nada",
         * sin tener que checar la tercera parte del if
         */
        playerSymbol.current === null && (
          <div>
            <button
              onClick={() => {
                /**
                 * Acá establezco el turno del jugador e inicio el juego
                 *
                 * Puede que llegue a ser mucha repetición de código.
                 * si lo llega a ser, puedo hacer otra función que se explicitamente el
                 * chooseSymbolButtonOnClickHandler, para saber que eso es "todo lo que pasa
                 * cuando presiono el botón"
                 */
                setPlayerSymbol(SYMBOL_X);
                gameStart();
              }}
              className="checkerValue"
            >
              X
            </button>
            <button
              onClick={() => {
                /**
                 * También le quité el hecho de leer del event.target.value.
                 *
                 * Ya con React casi no lo necesitas y llega a ser código más confuso
                 * si agarras valores del DOM cuando no lo necesitas.
                 *
                 * En mi experiencia, solo neceistas leer del event.target, cuando son
                 * elementos de un form (tipo un campo de texto), porque ahí sí no sabes
                 * qué escribió el usuario y lo tienes que recuperar
                 */
                setPlayerSymbol(SYMBOL_O);
                gameStart();
              }}
              className="checkerValue"
            >
              O
            </button>
          </div>
        )
      }
      <h2>{text}</h2>
      <br />
      <div className="board">
        {board.map((cell, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                playTurn(index, playerSymbol.current);
                passTurn(TURN_COMPUTER);
              }}
              className="cell"
              /**
               * Le agregué acá una lógica de deshabilitar los botones del
               * board si no es el turno del jugador o si el jugador no ha
               * elegido ficha, para evitar cosas raras
               */
              disabled={!canUserPlay}
            >
              {cell}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TicTacToe;
