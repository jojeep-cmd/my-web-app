<script>
  let count = 0;

  function increase() {
    count += 1;
  }

  function decrease() {
    count -= 1;
  }
</script>

<div class="counter">
  <h2>🔢 Bộ đếm</h2>
  <p class="count">{count}</p>
  <div class="buttons">
    <button on:click={decrease}>➖ Giảm</button>
    <button on:click={increase}>➕ Tăng</button>
  </div>
</div>

<style>
  .counter {
    text-align: center;
    padding: 2rem;
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    max-width: 300px;
    margin: 2rem auto;
    background: #f9f9f9;
  }

  .count {
    font-size: 3rem;
    font-weight: bold;
    color: #333;
    margin: 1rem 0;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #4f46e5;
    color: white;
    transition: background 0.2s;
  }

  button:hover {
    background: #3730a3;
  }
</style>
