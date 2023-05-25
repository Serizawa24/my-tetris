export const COLS = 10,
    ROWS = 20,
    BLOCK_SIZE = 30,
    COLOR_MAPPING = [
        'red',
        'orange',
        'green',
        'purple',
        'blue',
        'cyan',
        'yellow',
        'white'
    ],
    WHITE_COLOR_ID = 7,
    canvas = document.getElementById('board'),
    ctx = canvas.getContext('2d'),
    BRICK_LAYOUT = [
        [
          [
            [1, 7, 7],
            [1, 1, 1],
            [7, 7, 7],
          ],
          [
            [7, 1, 1],
            [7, 1, 7],
            [7, 1, 7],
          ],
          [
            [7, 7, 7],
            [1, 1, 1],
            [7, 7, 1],
          ],
          [
            [7, 1, 7],
            [7, 1, 7],
            [1, 1, 7],
          ],
        ],
        [
          [
            [7, 1, 7],
            [7, 1, 7],
            [7, 1, 1],
          ],
          [
            [7, 7, 7],
            [1, 1, 1],
            [1, 7, 7],
          ],
          [
            [1, 1, 7],
            [7, 1, 7],
            [7, 1, 7],
          ],
          [
            [7, 7, 1],
            [1, 1, 1],
            [7, 7, 7],
          ],
        ],
        [
          [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7],
          ],
          [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7],
          ],
          [
            [7, 1, 7],
            [7, 1, 1],
            [7, 7, 1],
          ],
          [
            [7, 7, 7],
            [7, 1, 1],
            [1, 1, 7],
          ],
        ],
        [
          [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7],
          ],
          [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7],
          ],
          [
            [7, 7, 1],
            [7, 1, 1],
            [7, 1, 7],
          ],
          [
            [7, 7, 7],
            [1, 1, 7],
            [7, 1, 1],
          ],
        ],
        [
          [
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
          ],
          [
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
          ],
          [
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
          ],
          [
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
          ],
        ],
        [
          [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
          ],
          [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
          ],
          [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
          ],
          [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
          ],
        ],
        [
          [
            [7, 1, 7],
            [1, 1, 1],
            [7, 7, 7],
          ],
          [
            [7, 1, 7],
            [7, 1, 1],
            [7, 1, 7],
          ],
          [
            [7, 7, 7],
            [1, 1, 1],
            [7, 1, 7],
          ],
          [
            [7, 1, 7],
            [1, 1, 7],
            [7, 1, 7],
          ],
        ],
    ],
    KEY_CODES = {
        LEFT: 'ArrowLeft',
        RIGHT: 'ArrowRight',
        UP: 'ArrowUp',
        DOWN: 'ArrowDown',
    };

    