<script lang="ts">
  interface Props {
    image: string;
    title: string;
    price: string;
    originalPrice?: string;
    discount?: number;
    commission: string;
    sold: string;
    href?: string;
    onGetLink?: () => void;
  }

  const {
    image,
    title,
    price,
    originalPrice,
    discount,
    commission,
    sold,
    href = "#",
    onGetLink,
  }: Props = $props();
</script>

<div class="card">
  <div class="card-img">
    <img src={image} alt={title} loading="lazy" />
    {#if discount}
      <span class="badge-discount">-{discount}%</span>
    {/if}
  </div>

  <div class="card-body">
    <p class="title">{title}</p>

    <div class="price-row">
      <span class="price">{price}</span>
      {#if originalPrice}
        <span class="original-price">{originalPrice}</span>
      {/if}
    </div>

    <div class="meta-row">
      <span class="commission">💚 {commission}</span>
      <span class="sold">{sold} đã bán</span>
    </div>
  </div>

  <div class="card-footer">
    <a class="btn-link" {href} onclick={onGetLink} target="_blank" rel="noopener noreferrer">
      Lấy link
    </a>
  </div>
</div>

<style>
  .card {
    background: #fff;
    border-radius: 12px;
    border: 1px solid #e8eaf0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition:
      box-shadow 0.2s ease,
      transform 0.2s ease;
  }

  .card:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  /* Image */
  .card-img {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    background: #f5f6fa;
    overflow: hidden;
  }

  .card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .badge-discount {
    position: absolute;
    top: 8px;
    left: 8px;
    background: #ee4d2d;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    line-height: 1;
  }

  /* Body */
  .card-body {
    padding: 12px;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font-size: 13px;
    font-weight: 500;
    color: #1a1a2e;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    min-height: 36px;
  }

  .price-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  }

  .price {
    font-size: 16px;
    font-weight: 700;
    color: #ee4d2d;
  }

  .original-price {
    font-size: 12px;
    color: #9ca3af;
    text-decoration: line-through;
  }

  .meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
  }

  .commission {
    font-weight: 600;
    color: #10b981;
  }

  .sold {
    color: #9ca3af;
  }

  /* Footer */
  .card-footer {
    padding: 10px 12px;
    border-top: 1px solid #f5f6fa;
  }

  .btn-link {
    display: block;
    width: 100%;
    padding: 8px 0;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    color: #ee4d2d;
    background: #fff4f2;
    border: 1px solid #fecdc7;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.15s;
  }

  .btn-link:hover {
    background: #fee2dd;
  }
</style>
