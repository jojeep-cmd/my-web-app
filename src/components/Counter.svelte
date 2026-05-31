<script>
    import { onMount } from "svelte";

    let currentTime = "";

    function updateTime() {
        const now = new Date();
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        currentTime = now.toLocaleDateString("vi-VN", options);
    }

    onMount(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    });
</script>

<div class="container">
    <div class="product-offer-item">
        <p id="gold-time">{currentTime}</p>

        <table class="gold-table">
            <thead>
                <tr>
                    <th>LOẠI</th>
                    <th>MUA</th>
                    <th>BÁN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Thế Giới</td>
                    <td colspan="2" id="world-gold">4,523.34 USD</td>
                </tr>
                <tr><td>999</td><td>14.400.000 </td><td>14.770.000</td></tr>
                <tr><td>990</td><td>14.350.000 </td><td>14.650.000</td></tr>
                <tr><td>985</td><td>14.020.000 </td><td>14.520.000</td></tr>
                <tr><td>980</td><td>13.570.000 </td><td>14.190.000</td></tr>
                <tr><td>710</td><td>10.190.000 </td><td>10.940.000</td></tr>
                <tr><td>610</td><td>8.560.000 </td><td>9.430.000</td></tr>
            </tbody>
        </table>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%; /* fix theo tag cha */
        overflow: hidden; /* tránh tràn ra ngoài */
    }

    .product-offer-item {
        background-color: black; /* nền đen */
        color: gold; /* chữ vàng */
        padding: 1px;
        border-radius: 1px;
        width: 100%; /* co theo cha */
        box-sizing: border-box;
    }

    #gold-time {
        color: red; /* thời gian màu đỏ */
        font-weight: bold;
        margin-bottom: 1px;
    }

    .gold-table {
        width: 100%;
        border-collapse: collapse;
    }

    .gold-table th,
    .gold-table td {
        border: 1px solid gold;
        padding: 1px;
        text-align: center;
    }
</style>
