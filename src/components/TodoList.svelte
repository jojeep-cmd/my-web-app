<script>
    let todos = [];
    let inputValue = "";

    function addTodo() {
        if (inputValue.trim() === "") {
            alert("Vui lòng nhập một todo!");
            return;
        }

        todos = [
            ...todos,
            {
                id: Date.now(),
                text: inputValue,
                completed: false,
            },
        ];
        inputValue = "";
    }

    function deleteTodo(id) {
        todos = todos.filter((todo) => todo.id !== id);
    }

    function toggleTodo(id) {
        todos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        );
    }

    function handleKeydown(e) {
        if (e.key === "Enter") {
            addTodo();
        }
    }

    $: todoCount = todos.length;
    $: completedCount = todos.filter((todo) => todo.completed).length;
</script>

<div class="todo-container">
    <h2>📝 Danh sách việc cần làm</h2>

    <div class="input-section">
        <input
            type="text"
            placeholder="Nhập công việc cần làm..."
            bind:value={inputValue}
            on:keydown={handleKeydown}
            class="todo-input"
        />
        <button on:click={addTodo} class="add-btn"> ➕ Thêm </button>
    </div>

    <div class="stats">
        <span class="stat-item">
            📊 Tổng: <strong>{todoCount}</strong>
        </span>
        <span class="stat-item">
            ✅ Hoàn thành: <strong>{completedCount}</strong>
        </span>
    </div>

    {#if todos.length === 0}
        <div class="empty-state">
            <p>😊 Không có công việc nào! Hãy thêm một cái mới.</p>
        </div>
    {:else}
        <ul class="todo-list">
            {#each todos as todo (todo.id)}
                <li class="todo-item {todo.completed ? 'completed' : ''}">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        on:change={() => toggleTodo(todo.id)}
                        class="todo-checkbox"
                    />
                    <span class="todo-text">{todo.text}</span>
                    <button
                        on:click={() => deleteTodo(todo.id)}
                        class="delete-btn"
                        title="Xóa công việc này"
                    >
                        🗑️
                    </button>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    .todo-container {
        background: white;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 2rem 0;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: #1e1b4b;
    }

    .input-section {
        display: flex;
        gap: 0.75rem;
        margin-bottom: 1.5rem;
    }

    .todo-input {
        flex: 1;
        padding: 0.75rem 1rem;
        border: 2px solid #e5e7eb;
        border-radius: 8px;
        font-size: 1rem;
        transition: all 0.3s ease;
    }

    .todo-input:focus {
        outline: none;
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .add-btn {
        padding: 0.75rem 1.5rem;
        background: #4f46e5;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        white-space: nowrap;
    }

    .add-btn:hover {
        background: #3730a3;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }

    .add-btn:active {
        transform: translateY(0);
    }

    .stats {
        display: flex;
        gap: 2rem;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 8px;
        margin-bottom: 1.5rem;
    }

    .stat-item {
        font-size: 0.95rem;
        color: #475569;
    }

    .stat-item strong {
        color: #4f46e5;
        font-size: 1.1rem;
    }

    .empty-state {
        text-align: center;
        padding: 2rem 1rem;
        color: #94a3b8;
        font-size: 1.05rem;
    }

    .todo-list {
        list-style: none;
        padding: 0;
    }

    .todo-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem;
        background: #f8fafc;
        border-radius: 8px;
        margin-bottom: 0.75rem;
        transition: all 0.3s ease;
        border-left: 4px solid transparent;
    }

    .todo-item:hover {
        background: #f1f5f9;
        border-left-color: #4f46e5;
    }

    .todo-item.completed {
        opacity: 0.6;
    }

    .todo-checkbox {
        width: 20px;
        height: 20px;
        cursor: pointer;
        accent-color: #4f46e5;
    }

    .todo-text {
        flex: 1;
        font-size: 1rem;
        color: #334155;
        word-break: break-word;
    }

    .todo-item.completed .todo-text {
        text-decoration: line-through;
        color: #94a3b8;
    }

    .delete-btn {
        padding: 0.4rem 0.6rem;
        background: #fee2e2;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .delete-btn:hover {
        background: #fecaca;
        transform: scale(1.1);
    }

    .delete-btn:active {
        transform: scale(0.95);
    }
</style>
