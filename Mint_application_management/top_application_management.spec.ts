// 申請関連のTOP（タイトル）確認

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www-fmg.tst.cardamom.kddi.com/login');
  await page.locator('#txt_login_id').click();
  await page.locator('#txt_login_id').press('ControlOrMeta+a');
  await page.locator('#txt_login_id').fill('smo0001');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('ArrowLeft');
  await page.locator('#txt_login_id').press('Tab');
  await page.locator('#txt_password').fill('kddi0077');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'ログイン' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '同意する' }).click();
  await page1.getByRole('button', { name: 'キャンセル' }).click();
  await page1.locator('#toggle_btn span').nth(1).click();
  await page1.getByText('シングルサインオン').click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: 'Mint' }).click();
  const page2 = await page2Promise;
  await expect(page2.getByRole('paragraph')).toContainText('テスト１ 太郎１ 様');
  await expect(page2.locator('#logout_button')).toContainText('ログアウト');
  await expect(page2.locator('#large_1')).toContainText('情報管理');
  await expect(page2.locator('#large_2')).toContainText('申請管理');
  await expect(page2.locator('#large_3')).toContainText('その他');
  await page2.getByText('申請管理', { exact: true }).click();
  await expect(page2.locator('body')).toContainText('審査関連');
  await expect(page2.locator('body')).toContainText('申込サイトデータアップロード');
  await expect(page2.locator('body')).toContainText('加盟店申請管理');
  await expect(page2.locator('body')).toContainText('加盟店申請情報一覧予約履歴');
  await expect(page2.locator('body')).toContainText('JPQR申請データアップロード');
  await expect(page2.locator('body')).toContainText('JPQR加盟店申請管理');
  await expect(page2.locator('body')).toContainText('その他申請関連');
  await expect(page2.locator('body')).toContainText('企業名・口座情報変更申請管理');
  await expect(page2.locator('body')).toContainText('店頭ツール追加申請ダウンロード');
});